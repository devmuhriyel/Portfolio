// Theme toggle
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

themeBtn.addEventListener('click', () => {
	const currentTheme = root.getAttribute('data-theme');
	const newTheme = currentTheme === 'day' ? 'night' : 'day';
	root.setAttribute('data-theme', newTheme);

	themeIcon.textContent = newTheme === 'day' ? '☀️' : '🌙';
	const nextMode = newTheme === 'day' ? 'night' : 'day';
	themeBtn.setAttribute('aria-label', `Switch to ${nextMode} mode`);
	themeBtn.setAttribute('title', `Switch to ${nextMode} mode`);
});

// Category Filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.link-card');

filterButtons.forEach(button => {
	button.addEventListener('click', () => {
		filterButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');

		const category = button.getAttribute('data-category');

		cards.forEach(card => {
			if (category === 'all' || card.getAttribute('data-category') === category) {
				card.classList.remove('hidden');
			} else {
				card.classList.add('hidden');
			}
		});
	});
});

document.getElementById('year').textContent = new Date().getFullYear();

const projectDialog = document.getElementById('projectDialog');
const projectFrame = document.getElementById('projectFrame');
const dialogTitle = document.getElementById('dialogTitle');
const dialogCategory = document.getElementById('dialogCategory');
const dialogOpenLink = document.getElementById('dialogOpenLink');
const dialogClose = document.getElementById('dialogClose');
const dialogMessage = document.getElementById('dialogMessage');
const dialogMessageText = document.getElementById('dialogMessageText');
const dialogMessageLink = document.getElementById('dialogMessageLink');

document.querySelectorAll('.project-button').forEach(button => {
	button.addEventListener('click', () => {
		const { title, provider, embedUrl, projectUrl, message } = button.dataset;
		dialogTitle.textContent = title;
		dialogCategory.textContent = provider;
		dialogOpenLink.href = projectUrl;
		dialogOpenLink.textContent = `Open in ${provider} ↗`;
		dialogMessageLink.href = projectUrl;
		dialogMessageText.textContent = message || '';
		dialogMessage.hidden = Boolean(embedUrl);
		projectFrame.hidden = !embedUrl;
		projectFrame.title = `${title} preview`;
		projectFrame.src = embedUrl || 'about:blank';
		projectDialog.showModal();
		dialogClose.focus();
	});
});

dialogClose.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('cancel', event => {
	event.preventDefault();
	projectDialog.close();
});
document.addEventListener('keydown', event => {
	if (event.key === 'Escape' && projectDialog.open) {
		event.preventDefault();
		projectDialog.close();
	}
}, true);
projectDialog.addEventListener('click', event => {
	if (event.target === projectDialog) {
		projectDialog.close();
	}
});
projectDialog.addEventListener('close', () => {
	projectFrame.src = 'about:blank';
});
