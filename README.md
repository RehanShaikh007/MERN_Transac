# Transaction Dashboard - MERN Stack Project

A full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) to fetch, display, and analyze transaction data. The application includes a responsive transaction table, statistics, bar charts, and pie charts for visualizing data.

---

## **Features**

1. **Transaction Table**:
   - Displays transactions with search and pagination functionality.
   - Shows details like ID, title, description, price, category, sold status, and image.
   - Responsive design with horizontal scrolling for mobile and tablet devices.

2. **Statistics**:
   - Displays total sale amount, total sold items, and total not sold items for the selected month.

3. **Bar Chart**:
   - Visualizes the number of items in different price ranges for the selected month.

4. **Pie Chart**:
   - Displays the distribution of items across categories for the selected month.

5. **Dynamic Month Selection**:
   - Users can select a month (January to December) to view data for that month.

6. **Responsive Design**:
   - The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

---

## **Technologies Used**

- **Frontend**:
  - React (Vite)
  - Tailwind CSS (for styling)
  - Axios (for API requests)
  - Chart.js (for bar and pie charts)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)

- **Third-Party API**:
  - [Product Transaction Data](https://s3.amazonaws.com/roxiler.com/product_transaction.json)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/transaction-dashboard.git
cd transaction-dashboard
```
### **2. Backend Setup**
**1. Navigate to the backend folder:**

``` bash
cd backend
```
**2. Install dependencies:**

``` bash
npm install
```
**3. Create a .env file in the backend folder and add your MongoDB connection URI:**
```bash
MONGO_URI=mongodb://localhost:27017/transaction-dashboard
```
**4. Start the backend server:**
``` bash
npm start
```
The backend will run on http://localhost:4000.

### **3. Frontend Setup**
**1. Navigate to the frontend folder:**

``` bash
cd ../frontend
```

**2. Install dependencies:**

``` bash
npm install
```
**3. Start the frontend development server:**

``` bash
npm run dev
```
The frontend will run on http://localhost:5173.

---

## **API Endpoints**

### **Backend APIs**

**1. Initialize Database:**

- Fetch data from the third-party API and seed the database.

- **Method:** GET

- **Endpoint:** /api/initialize

### **2. List Transactions:**

- Fetch transactions with search and pagination.

- **Method:** GET

- **Endpoint:** /api/transactions

- **Query Parameters:**

   - **month:** Selected month (e.g., March).

   - **page:** Page number (default: 1).

   - **perPage:** Items per page (default: 10).

   - **search:** Search term (optional).

### **3. Statistics:**

- Fetch total sale amount, total sold items, and total not sold items for the selected month.

 - **Method:** GET

- **Endpoint:** /api/stats

- **Query Parameter:** month.

### **4. Bar Chart Data:**

- Fetch price range distribution for the selected month.

- **Method:** GET

- **Endpoint:** /api/bar-chart

- **Query Parameter:** month.

### **5. Pie Chart Data:**

- Fetch category distribution for the selected month.

- **Method:** GET

- **Endpoint:** /api/pie-chart

- **Query Parameter:** month.

### **6. Combined Data:**

- Fetch data from all three APIs (statistics, bar chart, pie chart) in a single response.

- **Method:** GET

- **Endpoint:** /api/combined

- **Query Parameter:** month.

## **Screenshots**

### **Transaction Table**
![Image](https://github.com/user-attachments/assets/908781a3-b7ec-47d9-a9ca-c8f3c9d5e279)
![Image](https://github.com/user-attachments/assets/8407e7a4-705c-4ce9-b4d4-3ec53f0d5f46)

### **Statistics**
![Image](https://github.com/user-attachments/assets/acded336-f772-4178-87ec-8934e3d94418)

### **Bar Chart**

![Image](https://github.com/user-attachments/assets/33d75a68-ff6f-49fa-9693-6c06d102cd2d)
![Image](https://github.com/user-attachments/assets/0e18adbb-5fa1-4519-b8ed-ee00bd65523a)

### **Pie Chart**
![Image](https://github.com/user-attachments/assets/0602cd09-7420-44b1-b781-82798ccc2647)
![Image](https://github.com/user-attachments/assets/1c0a0fbe-04d8-4bb5-8c3d-f390309b2136)

---
## **Contact**
For any questions or feedback, feel free to reach out:

- **Name:** Rehan Shaikh

- **Email:** rehanmukhtarshaikh7@gmail.com

- **GitHub:** RehanShaikh007
