document.addEventListener("DOMContentLoaded", () => {
  // Get DOM Elements
  const bookGrid = document.getElementById("book-grid");
  const searchBox = document.getElementById("search-box");

  // Book Data - GLOBAL
  const books = [
    {
      id:1
      title: "Concepts of Physics Vol 1",
      author: "H.C. Verma",
      image: "Assets/hcv1.jpg",
      description:
        "A foundational book for physics, covering mechanics and waves in depth.",
      pdfPath:"",
    },
    {
      id:2
      title: "Concepts of Physics Vol 2",
      author: "H.C. Verma",
      image: "Assets/hcv2.jpg",
      description:
        "The second volume of the series focuses on thermodynamics, optics, and modern physics.",
      pdfPath:"",
    },
    {
      id:3
      title: "Organic Chemistry",
      author: "Morrison and Boyd",
      image: "Assets/mschouhan.jpg",
      description:
        "A comprehensive guide to organic chemistry concepts and mechanisms.",
      pdfPath:"",
    },
    {
      id:4
      title: "Physical Chemistry",
      author: "N Awasthi",
      image: "Assets/nawasthi.jpg",
      description:
        "An essential book for mastering physical chemistry with numerical problems.",
      pdfPath:"",
    },
    {
      id:5
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, and Stein",
      image: "Assets/algo.jpg",
      description:
        "A classic textbook for understanding algorithms and data structures.",
      pdfPath:"",
    },
    {
      id:6
      title: "The C Programming Language",
      author: "Kernighan and Ritchie",
      image: "Assets/c.jpg",
      description: "A foundational book for learning C programming.",
      pdfPath:"",
    },
    {
      id:7
      title: "Clean Code",
      author: "Robert C. Martin",
      image: "Assets/cc.jpg",
      description: "A guide to writing clean, readable, and maintainable code.",
      pdfPath:"",
    },
    {
      id:8
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      image: "Assets/pp.jpg",
      description: "A collection of practical advice for software developers.",
      pdfPath:"",
    },
    {
      id:9
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
      image: "Assets/dp.jpg",
      description: "A dp book on software design patterns.",
      pdfPath:"",
    },
    {
      id:10
      title: "The Mythical Man-Month",
      author: "Frederick P. Brooks Jr.",
      image: "Assets/mm.jpg",
      description: "A classic book on software project management.",
      pdfPath:"",
    },
    {
      id:11
      title: "The Art of Computer Programming",
      author: "Donald Knuth",
      image: "Assets/cp.jpg",
      description:
        "A comprehensive series on computer programming algorithms and techniques.",
      pdfPath:"",
    },
    {
      id:12
      title: "Structure and Interpretation of Computer Programs",
      author: "Harold Abelson and Gerald Jay Sussman",
      image: "Assets/si.jpg",
      description:
        "A classic book on computer science and programming paradigms.",
      pdfPath:"",
    },
    {
      id:13
      title: "Introduction to Machine Learning",
      author: "Ethem Alpaydin",
      image: "Assets/ml.jpg",
      description: "A comprehensive introduction to machine learning.",
      pdfPath:"",
    },
    {
      id:14
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
      image: "Assets/dl.jpg",
      description: "A comprehensive textbook on deep learning.",
      pdfPath:"",
    },
    {
      id:15
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell and Peter Norvig",
      image: "Assets/ai.jpg",
      description: "A classic textbook on artificial intelligence.",
      pdfPath:"",
    },
    {
      id:16
      title: "The Feynman Lectures on Physics",
      author: "Richard Feynman",
      image: "Assets/fl.jpg",
      description: "A legendary series of lectures on physics.",
      pdfPath:"",
    },
    {
      id:17
      title: "Introduction to Quantum Mechanics",
      author: "David J. Griffiths",
      image: "Assets/qm.jpg",
      description: "A popular textbook on quantum mechanics.",
      pdfPath:"",
    },
    {
      id:18
      title: "The Elegant Universe",
      author: "Brian Greene",
      image: "Assets/eu.jpg",
      description: "A popular science book on string theory.",
      pdfPath:"",
    },
    {
      id:19
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      image: "Assets/bh.jpg",
      description: "A popular science book on cosmology.",
      pdfPath:"",
    },
    {
      id:20
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      image: "Assets/sb.png",
      description:
        "A historical and philosophical exploration of human history.",
      pdfPath:"",
    },
  ];

  // Function to Render Books
  function displayBooks(bookArray) {
    bookGrid.innerHTML = ""; // Clear the grid before rendering

    if (bookArray.length === 0) {
      bookGrid.innerHTML = `<p class="text-gray-500 col-span-full text-center">No books found.</p>`;
      return;
    }

    bookArray.forEach((book, newIndex) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add(
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "p-4",
        "text-center",
        "hover:shadow-lg",
        "transition",
        "duration-300"
      );

      bookCard.innerHTML = `
              <img src="${book.image}" alt="${book.title}" class="w-full h-40 object-cover rounded-md mb-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">${book.title}</h3>
              <p class="text-gray-600 mb-4">${book.author}</p>
              <button data-index="${newIndex}" class="view-details bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  View Details
              </button>
          `;

      bookGrid.appendChild(bookCard);
    });

    // Add Click Event Listeners AFTER Rendering
    document.querySelectorAll(".view-details").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        showDetails(bookArray,index);
      });
    });
  }

  // Close Banner Event Listener
  document.getElementById("close-banner").addEventListener("click", () => {
    const banner = document.getElementById("book-banner");
    banner.classList.add("hidden");
  });

  // Function to Show Book Details
  function showDetails(bookArray, index) {
    const book = bookArray[index];
    if (book) {
      // Populate the banner with book details
      document.getElementById("banner-title").textContent = book.title;
      document.getElementById(
        "banner-author"
      ).textContent = `Author: ${book.author}`;
      document.getElementById("banner-image").src = book.image;
      document.getElementById("banner-description").textContent =
        book.description || "No description available.";

      // Show the banner
      const banner = document.getElementById("book-banner");
      banner.classList.remove("hidden");
    } else {
      console.error("Book not found at index", index);
    }
  }

  // Search Functionality
  search.addEventListener("input", () => {
    const searchTerm = search.value.toLowerCase();
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)||
        book.description.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
  });

  // Initial Render of Books
  displayBooks(books);
});
