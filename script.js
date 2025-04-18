document.addEventListener('DOMContentLoaded', () => {
  // Handle contact form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message! We’ll get back to you shortly.');
    form.reset();
  });

  // Course data for modal
  const courseData = {
    maths: {
      title: "Maths Mastery",
      description: "From Key Stage 2 to A-Level, our maths programme focuses on step-by-step understanding, confidence-building, and exam excellence.",
      details: [
        "Level: KS2 – A-Level",
        "Price: £30/hour (group), £50/hour (1-to-1)",
        "Flexible scheduling (evenings/weekends)",
        "Optional mock exam reviews"
      ]
    },
    science: {
      title: "Science Success",
      description: "Simplify complex concepts in biology, chemistry, and physics. Ideal for GCSE and A-Level students.",
      details: [
        "Level: GCSE & A-Level",
        "Price: £35/hour",
        "Topic-specific support and past paper focus",
        "Free science resources included"
      ]
    },
    english: {
      title: "English Elevation",
      description: "Boost your grammar, comprehension, and essay writing. Suitable for KS3, GCSE, and beyond.",
      details: [
        "Level: KS3 – GCSE",
        "Price: £30/hour",
        "Literature & Language tailored support",
        "Reading skills workshops"
      ]
    },
    exam: {
      title: "Exam Prep",
      description: "Targeted revision support for GCSEs, SATs, and entrance exams using proven strategies.",
      details: [
        "Exam focus: GCSE, SATs, 11+",
        "Price: £40/hour",
        "Custom revision plans",
        "Includes past paper packs"
      ]
    }
  };

  // Functions for course modal
  window.showCourse = function(key) {
    const data = courseData[key];
    document.getElementById('course-title').textContent = data.title;
    document.getElementById('course-description').textContent = data.description;

    const infoList = document.getElementById('course-info');
    infoList.innerHTML = "";
    data.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      infoList.appendChild(li);
    });

    document.getElementById('course-detail').style.display = 'flex';
  };

  window.hideCourse = function() {
    document.getElementById('course-detail').style.display = 'none';
  };

  // Mobile nav toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const navList = document.querySelector('nav ul');
      navList.classList.toggle('show');
    });
  }
});
