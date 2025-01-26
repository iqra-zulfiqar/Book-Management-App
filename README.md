**Book Store App - MERN Stack** <br/>
This project is a Book Management Application built using React, Node.js, Express, and MongoDB. It provides a complete CRUD (Create, Read, Update, Delete) functionality for managing a collection of books, including different views like a table and card view for displaying books.

![Screenshot 2025-01-27 021705](https://github.com/user-attachments/assets/62b6a831-9573-4a83-b123-94501c1cb8b6)


**Features of App** <br/>
<br/>
**Frontend**

React-based UI with reusable components like Navbar, BooksTable, and BooksCard.
Toggle between Table and Card views for displaying books.
Dynamic routing with react-router-dom for navigation (e.g., Create, Edit, Delete, and Show Book pages).
Interactive UI with loading indicators using the Spinner component.
Responsive design powered by Tailwind CSS. <br/>
<br/>
**Backend**

Node.js + Express server with structured routing and middleware.
Mongoose-based connection to MongoDB with a Book model.
API endpoints for CRUD operations (/books).

**Functionality**

This application allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. Below is an overview of its core functionalities:

**View Books**

Display a list of books fetched from the backend in two different formats:
Table View: Organized rows and columns for detailed information.
Card View: Visually appealing grid layout with individual cards for each book.
Toggle between views using the Table and Card buttons.
<br/>
<br/>
**Add New Book**

Navigate to the "Add Book" page by clicking the Add Book button (plus icon).
Fill in the required details such as title, author, and publish year to create a new book.
The new book is saved to the MongoDB database via the backend.
<br/>
<br/>
**View Book Details**

Click on a specific book entry in the list to view its detailed information.
See properties like ID, title, author, publish year, and timestamps (created at, updated at). <br/>
<br/>
**Edit Book**

Navigate to the "Edit Book" page for a specific book by selecting the edit option.
Modify the book details and save changes, which are updated in the database. <br/>
<br/>
**Delete Book**

Delete a book using the delete option from the table or card view.
The deleted book is removed from the database and no longer appears in the list.
Loading Indicator

A spinner is displayed whenever the app is loading data from the backend, ensuring a smooth user experience.
Backend Integration

The application interacts with a Node.js + Express backend to fetch, add, update, and delete books stored in a MongoDB database.
These functionalities make the application a complete solution for managing books, offering an intuitive and responsive interface.

**Technologies Used** <br/>
<br/>
Frontend: React, React Router, React Icons, Tailwind CSS.<br/>
Backend: Node.js, Express, Mongoose.
Database: MongoDB.
