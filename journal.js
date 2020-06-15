 console.log('it works');
const journal = [
  {
    title: "The horizon",
    content: "Beautiful evening with wonderful colors at the end of the horizon"
  },
  {
    title: "A little frog",
    content: "I found a poor little frog outside of my room. It was so cute."
  },
  {
    title: "Mother's Day",
    content: "We were celebrating mother's day. It was on 7 of june 2020."
  }
];

// First prompt for showing all the entries//

let journalList = Number(prompt("Welcome to my Onja journal!\nEnter 1 for listing all entries"));
if (journalList === 1) {
for (let i = 0; i < journal.length; i++) { 
    console.log(journal[i]);
  }
}
// Second prompt ask user to create new journal and give instruction//

  let newJournal = Number(prompt("Do you want to create new journal entry? (Press 2)")); 
if (newJournal === 2) {
  let newJournalTitle = Number(prompt("Enter the title"));
  let newJournalContent = Number(prompt("Enter new content"));
  const newEntry = {title: newJournalTitle, content: newJournalContent};
  journal.push(newEntry);
  }
// Last prompt if the user want to quit//

let journalQuit = Number(prompt("Press 3 to quit"));
let num = 0;
while (num < 3) {
  num++;
}
console.log(num);
