const fs = require('fs');

for (let i = 47; i <= 250; i++) {
    const filename = `${i}.html`;
    const content = `<html>
    <head>
      <link rel="stylesheet" href="pieces.css">
    </head>
  
    <body>
      <nav>
  
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="background.html">Background</a></li>
          <li><a href="pieces.html">Pieces</a></li>
          <li><a href="vocab.html">Vocab</a></li>
        </ul>
      </nav>
      <div id="image">
          <img src="${i}.jpeg" alt="PUT ALT ID HERE">
        </div>
  
      <h1>Title</h1>
  
      <h2>Form</h2>
      <p>Form</p>
  
      <h2>Content</h2>
      <p>-Cntent</p>
  
      <h2>Function</h2>
      <p>Function</p>
      <h2>Context</h2>
      <p>Context</p>
      <h2>Additional Information</h2>
      <p>-Additional</p>
    </body>
    <button class="nav-button" id="prev-button">Previous</button>
    <button class="nav-button" id="next-button">Next</button>
  
  
    <script src="navigation1.js"></script>
  </html>`;
  
    // write the file
    fs.writeFileSync(filename, content);
  }
  
  