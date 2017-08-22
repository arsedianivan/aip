var item = {
        title: "Cheese",
        releaseDate: "14/08/2015",
        duration: "85 Minutes",
        genre: "Comedy",
        synopsys: "Will Henry is a newly single graphic novelist balancing parenting his young twin daughters and a classroom full of students while exploring and navigating the rich complexities of new love and letting go of the woman who left him."
    }
var element = <ul>  
                    <li>Title: {item.title}</li>
                    <li>Release Date: {item.releaseDate}</li>
                    <li>Duration: {item.duration}</li>
                    <li>Genre: {item.genre}</li>
                    <li>Synopsys: {item.synopsys}</li>
                </ul>

ReactDOM.render(
              element,
                document.getElementById("root")
)

