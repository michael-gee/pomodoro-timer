@import url('https://fonts.googleapis.com/css?family=Raleway');

@import url('https://fonts.googleapis.com/css?family=Orbitron');

 /* BODY */
body {
  background-color: black;
  margin: 0;
  font-family: "Raleway", arial, serif;
}

.numbers {
  font-family: "Orbitron", arial, serif;
}

/* CONTAINER DIV */
.container {
  height: 460px;
  width: 320px;
  background-color: white;
  margin: 50px auto;
  border-radius: 10px;
}

.container h1 {
  text-align: center;
  padding-top: 10px;
  margin: 0;
  font-size: 1.7em;
}

#title-subtext {
  margin: 0;
  margin-bottom: 10px;
  text-align:center;
  font-size: 1.5em;
}

/* DURATION DIVS */
.duration-buttons {
  overflow: hidden;
  margin-left: 10%;
}

.duration {
  width: 45%;
  float: left;
  text-align: center;

}

.row {
  overflow: hidden;
  padding-left: 19px;
  margin-top: 5px;
}

.minus-button, .duration-input, .plus-button {
  float: left;
}

.minus-button, .plus-button {
  padding: 4px 8px;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 7px;
}

.plus-button {
  background-color: black;
}

.minus-button {
  background-color: red;
}

.duration-input {
  width: 30px;
  padding: 5px;
  font-size: 1.3em;
  border-radius: 3px;
  margin: 2px;
}

.title {
    font-size: 1.5em;
}

 /* t2 === TITLE 2 */
.t2 {
  color: red;
}

/* DURATION 1 (SESSION) */
#d1 {
  border: 1.5px solid black;
  padding-right: 10px;
}
 
/* DURATION 2 (BREAK) */
#d2 {
  border: 1.5px solid red;
  color: red;
}

.clear {
  clear: both;
}

/* FALCONS DIV */
.falcons-logo {
  text-align: center;
  margin-top: 5px;
}

#falcons-img {
  width: 150px;
}

/* TIMER DIV */
#timer {
  font-size: 3.5em;
  text-align: center;
  margin: 0;
}

/* CONTROL-BUTTONS */
.control-buttons {
  padding-left: 8px;
  margin-top: 5px;
  overflow: hidden;
  font-size: 1.5em;
}

.start, .pause, .reset {
  float: left;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin: 5px;
}

.start{
  background-color: black;
}
.pause{
  background-color: grey;
}
.reset{
  background-color: red;
}
