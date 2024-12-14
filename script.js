// Change Background Color
document.getElementById("change-color").addEventListener("click", () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F5"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
  
  // Add New Element
  document.getElementById("add-element").addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added element!";
    newElement.style.color = "blue";
    document.getElementById("dynamic-content").appendChild(newElement);
  });
  
  // Toggle Visibility
  document.getElementById("toggle-visibility").addEventListener("click", () => {
    const target = document.getElementById("target-element");
    if (target.classList.contains("hidden")) {
      target.classList.remove("hidden");
    } else {
      target.classList.add("hidden");
    }
  });
  
  // Animate Element
  document.getElementById("animate-element").addEventListener("click", function () {
    const content = document.getElementById("dynamic-content");
    content.style.transition = "transform 0.5s";
    content.style.transform = content.style.transform === "rotate(360deg)" ? "rotate(0deg)" : "rotate(360deg)"
  });
  
  // Change Font Size
  document.getElementById("change-font-size").addEventListener("click", () => {
    const target = document.getElementById("target-element");
    const fontSizes = ["16px", "20px", "24px", "28px", "32px"];
    const currentSize = window.getComputedStyle(target).fontSize;
    
    // Pick a random size that is not the current size
    let newSize;
    do {
      newSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
    } while (newSize === currentSize);
  
    target.style.fontSize = newSize;
  });
  