const Book = ({title,author,cover}) =>{

    return(
        
        <section>
            <img src={cover} alt="title" className="book-cover"/>
            <h2 className="book-title">{title}</h2>
            <p className="book-author">By {author} </p>
        </section>
        

    );

};

export default Book;