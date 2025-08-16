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
  });

  // Experience toggle effect
  const experienceItems = document.querySelectorAll('#resume-container .experience-item h3');
  experienceItems.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
    });
  });
}
