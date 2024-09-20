document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
  
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        item.classList.remove('active');
      } else {
        document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.question').forEach(ques => ques.classList.remove('active'));
        answer.style.display = 'block';
        item.classList.add('active');
      }
    });
  });
  