 console.log('it works');
let JournalEntry = [
  {
    "title": "The horizon",
    "content": "Beautiful evening with wonderful colors at the end of the horizon"
  },
  {
    "title": "A little frog",
    "content": "I found a poor little frog outside of my room. It was so cute."
  },
  {
    "title": "Mother's Day",
    "content": "We were celebrating mother's day. It was on 7 of june 2020."
  }
]
let journalList = Number(prompt("Welcome to my Onja journal!\nEnter 1 for listing all entries"));
for (let i = 0; i < JournalEntry.length; i++) { 
    console.log (JournalEntry[i]);
  }
  let newJournalList = Number(prompt("Do you want to create new journal entry? (Press 2)")); 
  let newObject = {"title": "", "content": ""};
  JournalEntry.push(newObject);

  let newJournalTitle = Number(prompt("Enter the title"));
  let newJournlContent = Number(prompt("Enter new content"));
  let journalQuit = Number(prompt("Press 3 to quit"));

