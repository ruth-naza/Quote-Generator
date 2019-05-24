var quotes = [
  'A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.',
  'Leadership Is The Ability To Get Extraordinary Achievement From Ordinary People',
  'Leaders Set High Standards. Refuse To Tolerate Mediocrity Or Poor Performance',
  'Clarity Is The Key To Effective Leadership. What Are Your Goals?',
  'The Best Leaders Have A High Consideration Factor. They Really Care About Their People',
  'Leadership Is More Who You Are Than What You Do.',
  'Entrepreneurial Leadership Requires The Ability To Move Quickly When Opportunity Presents Itself.',
  'Leaders Are Innovative, Entrepreneurial, And Future-Oriented. They Focus On Getting The Job Done.',
  'Superior Leaders Are Willing To Admit A Mistake And Cut Their Losses. Be Willing To Admit That You\’ve Changed Your Mind. Don\’t Persist When The Original Decision Turns Out To Be A Poor One.',
  'The True Test Of Leadership Is How Well You Function In A Crisis.'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
