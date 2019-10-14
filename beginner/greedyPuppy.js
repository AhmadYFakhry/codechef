/*
Tuzik is a little dog. But despite the fact he is still a puppy he already knows about the pretty things
that coins are. He knows that for every coin he can get very tasty bone from his master. 
He believes that some day he will find a treasure and have loads of bones.

And finally he found something interesting. A wooden chest containing N coins!
But as you should remember, Tuzik is just a little dog, and so he can't open it by himself. 
Actually, the only thing he can really do is barking. He can use his barking to attract nearby 
people and seek their help. He can set the loudness of his barking very precisely, and 
therefore you can assume that he can choose to call any number of people, from a minimum of 1, 
to a maximum of K.

Example: Input [5, 2]
5 coins 2 people are called
each person will take 2 coins
so that leave 1 coin for Tuzik

5 % 2 === 1;
*/
function greedyPuppy(arr) {
    return arr[0] % arr[1];
}