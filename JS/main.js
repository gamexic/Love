const heart = document.getElementById("heart");
const toggleHeart = () => {
  heart.classList.toggle("heart-filled");
};

heart.addEventListener("click", toggleHeart);
