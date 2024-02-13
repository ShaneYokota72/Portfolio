# Number Scan / OCR

## The Code for this project is available [here](https://github.com/ShaneYokota72/Portfolio/blob/main/src/projects/NumberScan.js).

This project is a simple OCR (Optical Character Recognition) project that uses the pure JavaScript to recognize and extract numbers from images. The project can detect any numbers from an image. The code then displays the extracted text to the user.


## There are two main classes in this project:
### NumImg

The NumImg class has the following methods:
```
1. findAndCreateDigitBlobs()
- This method is used to find the blobs of pixels that are used to create the numbers. It then creates a DigitBlob object for each blob of pixels.

2. classify()
- This method is used to classify the blobs of pixels as numbers. It then returns the numbers that are found in the image.
```

### DigitBlob

The DigitBlob class has the following methods:
```
1. classify()
- This method is used to classify the blob of pixels as a number. It then returns the number that is found in the blob of pixels.

2. calc_bit_quads()
- This method is used to calculate the bit quads for the blob of pixels. It then returns the bit quads for the blob of pixels.

3. calc_euler_number()
- This method is used to calculate the Euler number for the blob of pixels. It then returns the Euler number for the blob of pixels.

4. calc_centers_of_mass()
- This method is used to calculate the centers of mass for the blob of pixels. It then returns the centers of mass for the blob of pixels.

5. calc_symmetry()
- This method is used to calculate the symmetry for the blob of pixels. It then returns the symmetry for the blob of pixels.

6. VHline()
- This method is used to calculate the vertical and horizontal lines for the blob of pixels. It then returns the vertical and horizontal lines for the blob of pixels.
```

### Example Usage
```
let Image = new NumImg(pixelData(array to tell us RGB value at all pixels), image.height(height of image(in px)), (width of image(in px)));
Image.findAndCreateDigitBlobs();
let number_answer = Image.classify(false);
console.log("Number: " + number_answer);
```