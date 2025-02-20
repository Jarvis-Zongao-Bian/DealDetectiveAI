# 🛒 DealDetectiveAI

## 🚀 **AI-Powered Shopping Assistant**

**DealDetectiveAI** is an AI-powered shopping assistant designed to help users find the best deals online through **personalized recommendations** and **price comparisons** across multiple retailers. Built using **React.js**, **Node.js**, and **PostgreSQL**, this full-stack application integrates **OpenAI's GPT-4** for intelligent product suggestions and APIs/web scraping for real-time price comparison.

---

## 📋 **Features**
- **AI Recommendations:** Personalized product suggestions using OpenAI's GPT-4.
- **Price Comparison:** Real-time price comparison from platforms like Amazon and Walmart.
- **Smart Search:** Fast and intuitive product search.
- **User Browsing History:** Stores and utilizes user search history for better recommendations.

---

## 🧩 **Tech Stack**
- **Frontend:** React.js with React Router
- **Backend:** Node.js (Express.js)
- **Database:** PostgreSQL
- **AI:** OpenAI API (GPT-4)
- **Web Scraping:** Cheerio, Puppeteer

---

## 🗂️ **Project Structure**
```plaintext
DealDetectiveAI
├── backend
│   ├── config
│   ├── routes
│   ├── services
│   ├── .env
│   ├── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
├── README.md
```

---

## 🛠️ **Installation & Setup**

### 1. **Clone the Repository**
```bash
# Clone the repo
git clone https://github.com/your-github-username/DealDetectiveAI.git
cd DealDetectiveAI
```

---

### 2. **Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5001
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=deal_detective_ai
DB_PASSWORD=your_password
DB_PORT=5432
OPENAI_API_KEY=your_openai_api_key
RAPIDAPI_KEY=your_rapidapi_key
RAPIDAPI_HOST=amazon-data.p.rapidapi.com
```

Initialize PostgreSQL database:
```sql
CREATE DATABASE deal_detective_ai;
```

Start the backend server:
```bash
npm run dev
```

---

### 3. **Frontend Setup**
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:
```env
REACT_APP_API_URL=http://localhost:5001/api
```

Start the frontend server:
```bash
npm start
```

---

## ✅ **Usage**
1. Open the app in your browser at `http://localhost:3001`.
2. Use the search bar to find products and view AI recommendations.
3. Check real-time price comparisons and explore personalized suggestions.

---

## 🧪 **Testing the Application**
1. Ensure PostgreSQL is running.
2. Seed the database with sample products using SQL:
```sql
INSERT INTO products (name, price, url, source) VALUES
('Apple iPhone 15', 999.99, 'https://apple.com/iphone-15', 'Apple Store'),
('Samsung Galaxy S23', 799.99, 'https://samsung.com/galaxy-s23', 'Samsung Store');
```

---

## 🌎 **Deployment**
- **Frontend:** Deploy using [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend:** Host using [Render](https://render.com/) or [Heroku](https://www.heroku.com/)
- **Database:** Use [ElephantSQL](https://www.elephantsql.com/) for PostgreSQL hosting

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to submit issues, feature requests, and pull requests.

### **How to Contribute:**
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m 'Add new feature'`)
4. Push the branch (`git push origin feature-branch`)
5. Submit a Pull Request

---

## 📞 **Contact**
For any questions or feedback, feel free to reach out via:
- **GitHub Issues:** Open a new issue in the repo
- **LinkedIn:** [Your LinkedIn Profile](#)

---

## 💡 **License**
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute the code as you see fit.

---

Happy Coding! 🚀

