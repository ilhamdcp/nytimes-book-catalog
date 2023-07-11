interface BookContainerArgs {
    imageUrl: string,
    bookTitle: string | undefined
}

export default function BookContainer(args: BookContainerArgs) {
    const bookTitleComponent = args.bookTitle !== undefined ? (<p>{args.bookTitle}</p>) : null;
    return (
        <div className="book_container">
            <img src={args.imageUrl}/>
            {bookTitleComponent}
        </div>
    );
}