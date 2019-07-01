const { Author, Book } = require("./models");

const createAuthorsAndBooks = async () => {
  //Mtd 1
  // const author1 = await Author.create({ name: "George Orwell" });
  // await Book.create({ title: "Animal Farm" });
  // await Book.setAuthor(author1)
  //Mtd 2
  await Author.create(
    {
      name: "George Orwell",
      books: [
        { title: "Animal Farm" },
        { title: "Homage to Catalonia" },
        { title: "The Road to Wigan Pier" },
        { title: "1984"}
      ]
    },
    { include: [Book] }
  );

  await Author.create(
    {
      name: "Aldous Huxley",
      books: [
        {
          title: "Brave New World"
        }
      ]
    },
    { include: [Book] }
  );

  await Author.create(
    {
      name: "Ray Bradbury",
      books: [
        {
          title: "Fahrenheit 451"
        }
      ]
    },
    { include: [Book] }
  );
};

module.exports = createAuthorsAndBooks;
