import React from 'react';
import resumePDF from "C:/Users/abc/Desktop/personal-portfolio/personal-portfolio/src/assets/img/RajatSinghResume.pdf"; // Import your PDF file

const Pdfbutton = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href to the path of the resume PDF file
    link.href = resumePDF;
    // Set the download attribute to the desired filename
    link.download = 'RajatSinghresume.pdf';
    // Trigger a click event on the anchor element
    link.click();
  };

  return (
    <div>
      {/* Attach the handleDownload function to a button click */}
      <button  style={{color:'red'}} onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default Pdfbutton;
