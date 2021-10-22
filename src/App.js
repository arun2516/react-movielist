import {useState} from "react";
import './App.css';


function App() {

  let users = [{name:"Soodhu Kavvum",pic:"https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-soodhukavvum/list/soodhukavvum1170x658.jpg",summary:"Director Nalan Kumarasamy's Soodhu Kavvum, starring Vijay Sethupathi, is one of the most loved Tamil films of all time. The film follows the story of Das and his team planning to kidnap the only son of a politician. Later, they come to know that the politician's son has been planning his own kidnap to loot his father's money. When a mad cop is brought in to investigate, the film takes a turn."},
  {name:"Sathuranga Vettai",pic:"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/8080/1000058080/1000058080-h",summary:"H Vinoth's Sathuranga Vettai is one of the most interesting films that hit the theatres in 2014. The film is about a skilled con man who uses the weakness of people to pull off high-profile scams. It gets interesting when the people whom he cheated plan to teach him a lesson."},
  {name:"Ready or Not",pic:"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3255/663255-h",summary:"Ready or Not is the perfect movie to kick off this list. This story of a young woman (Samara Weaving) marrying into a rich, legacy family takes a stunning twist early and never looks back. And if you don't know where the story goes, well, we don't want to be the ones to tell you—but things get bloody and violent and we really scrape at human depravity. The movie sits somewhere in between horror and thriller, but throughout it remains a sharp, biting satire of class differences, and keeps audiences laughing through every twisted and dark turn."},
  {name:"Burn After Reading",pic:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c4a0788b6f85f82dd03ee76910bab7a54963c66f382a8e7105da5bfb1fb1659._UY500_UX667_RI_V_TTW_.jpg",summary:"Another entry from The Coen Brothers, who just know how to do this kind of thing. Burn After Reading is similar to Fargo in the fact that its telling a small-time, screwball crime-adjacent story; this one also ties in a thread about inept government agency screw-ups. Featuring Frances McDormand, George Clooney, John Malkovich, and one of the most entertaining Brad Pitt performances of all time."},
  {name:"Pulp Fiction",pic:"https://d23028rwg87pwd.cloudfront.net/ew0KICAgICAgICAgICAgICAgICAgICAiYnVja2V0IjogImFycmVjbG91ZGluYXJ5LWFwLXNvdXRoLTEiLA0KICAgICAgICAgICAgICAgICAgICAia2V5IjogInJlcy9hcnJlL2ltYWdlL3VwbG9hZC9QdWxwLUZpY3Rpb25faDhoaW1iLzE1NzEwNTMwNDMucG5nIiwNCiAgICAgICAgICAgICAgICAgICAgImVkaXRzIjp7DQogICAgICAgICAgICAgICAgICAgICAgICAid2VicCI6IHsicXVhbGl0eSI6NDB9LA0KICAgICAgICAgICAgICAgICAgICAgICAgInJlc2l6ZSI6IHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgImZpdCI6ICJjb3ZlciINCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0=",summary:"Pulp Fiction was Quentin Tarantino's second film (after Reservoir Dogs), but it was his major breakthrough. Told through a series of non-linear but connecting vignettes, the movie is a thrilling crime story that will have your jaw dropped one moment and find you laughing at a funny retort or something so outrageously absurd the next. One of the great movies of all time for balancing just about anyone could want in a movie in one package."},
  {name:"Savarakathi",pic:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6ee4029e01646ecd05e9306001475613fb356570a9ddb120cf20f4082ae652f9._UY500_UX667_RI_V_TTW_.jpg",summary:"Managa (Mysskin) is a dim-wit gangster who has no check on his anger. He is out on parole and has to appear before the cops before 6 pm. As he decides to spend the time with his gang, he gets into trouble with a barber named Pichai (Ram). Managa decided to kill Pichai and things go beyond control."},
  {name:"Moodar Koodam",pic:"https://i.ytimg.com/vi/ZrXBRL4vzkc/maxresdefault.jpg",summary:"Director Naveen's Moodar Koodam follows the story of four strangers who join hands to rob the house of a wealthy man. They hatch an elaborate plan and when they reach his doorstep, they come to know he is bankrupt."},
  {name:"Kolamaavu Kokila",pic:"https://cinemachaat.files.wordpress.com/2019/02/poster-e1549366249632.jpg?w=645",summary:"Kokila (Nayanthara) and her family have financial issues. To earn quick bucks, she gets involved in a drug racket along with her family. However, their lives are at risk when there is an internal drug war within the city. The film's climax sequences will make you laugh out loud."},
{name:"Jil Jung Juk",pic:"https://i.ytimg.com/vi/pXPoF1Uu00E/maxresdefault.jpg",summary:"If you're in for a wacky ride, Jil Jung Juk is a perfect pick. The film is about three drug dealers who take up the task of transporting a car with cocaine paint. However, they get drunk and end up driving a car that looks similar to the cocaine-coated car instead."}]
  return(
    <div className="App">
      <Head heading="10-Dark Comedy Movies for People With a Messed Up Sense of Humor"/>
      {users.map((user)=>(<Msg name={user.name} pic={user.pic} summary={user.summary}/>))}
      {/* <Counter/> */}
      
    </div>
  );

}
function Msg({name,pic,summary}){
  
  return(
    <div className="content">
      <h1 className="name">{name}</h1>
      <img height="400" width="70%" src={pic} alt={name}/>
      <p className="summary">{summary}</p>
      <Counter/>
      <hr></hr>
    </div>
  );
}
function Head(props){
  return(
    <p className="head">{props.heading}</p>
  )
}
function Counter(){
  const[like,setlike]=useState(0);
  const[dislike,setdislike] = useState(0);
  return(
    <div>
      <button onClick={()=> setlike(like +1)}>👍{like}</button>
      
    <button onClick={()=> setdislike(dislike+1)}>👎{dislike}</button>
      
    </div>
  )
}


export default App;

