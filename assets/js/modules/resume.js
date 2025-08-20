export function initializeResume() {
  console.log('resume.js: Initializing resume interactions.');

  // Skills hover effect
  const skills = document.querySelectorAll('#resume-container .skill');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    const skillLevelDiv = document.createElement('div');
    skillLevelDiv.classList.add('skill-level');
    skillLevelDiv.textContent = level;
    skill.appendChild(skillLevelDiv);
<<<<<<< HEAD

    // Add inline progress bar
    const bar = document.createElement('div');
    bar.className = 'skill-bar';
    const fill = document.createElement('div');
    fill.className = 'skill-bar-fill';
    bar.appendChild(fill);
    skill.appendChild(bar);

    // Animate width
    const pct = (level || '').trim();
    requestAnimationFrame(() => {
      setTimeout(() => { fill.style.width = pct; }, 60);
    });
=======
>>>>>>> b0cda0aeadb494044c64b8eda3afa2af5eab90d9
  });

  // Experience toggle effect
  const experienceItems = document.querySelectorAll('#resume-container .experience-item h3');
  experienceItems.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
    });
  });
}
