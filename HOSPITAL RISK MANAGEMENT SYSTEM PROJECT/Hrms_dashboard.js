
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
      const title = this.querySelector('.card-title').innerText;
      const text = this.querySelector('.card-text').innerText;
      alert(`${title}: ${text}`);
  });
});


document.querySelectorAll('.list-group-item').forEach(item => {
  item.addEventListener('click', function() {
      const issueText = this.innerText;
      alert(`Issue: ${issueText}`);
  });
});
