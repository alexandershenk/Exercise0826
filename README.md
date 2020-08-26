# InterviewExercise

## Q1 - Given a number and an array, print both the count of integers in the array above the number and the count below it:
```
let countAboveAndBelow = (arr, comparison) => {
  if(isNaN(comparison) || !Array.isArray(arr))
    return;

  let above = 0, below = 0;  

  for (let num of arr) {
    if (num > comparison) above++;
    else if (num < comparison) below++;
  }

  return {above: above, below: below};
};

let result = countAboveAndBelow([1,5,2,1,10], 6);
console.log("above: "+result.above+", below: "+result.below);
```

## Q2 - Given a string and an offset, rotate the string:
```
let rotateString = (str, offset=0) => {
  if (isNaN(offset) || !(typeof str === 'string' || str instanceof String))
    return;
  
  return str.slice((str.length-offset) % str.length, str.length) +
                   str.slice(0, (str.length-offset) % str.length);
};

console.log(rotateString("MyString", 2));
```

## Q3 - If you could change one thing about your favorite framework/language/platform, what would it be?

My hypothetical change will be for JavaScript, a language I've been diving 
back into lately.
                                                                               
It is this: make type checking of variables super succinct, no matter the type. 
Instead of "!(typeof str === 'string' || str instanceof String)", why not
str.isString? Ruby can do this.

Type checking can be commonplace in dynamically-typed languages. My personal 
opinion is that simple pieces of information that are frequently expressed 
should be able to be encoded concisely.

By the way: "typeof str === 'string'" might capture most cases, but "most" isn't
enough, imho. I think something like type checking should be robust. The fact
we have to do "!(typeof str === 'string' || str instanceof String)" is just one
case, of many, of having to awkwardly navigate JavaScript's potholes. It's a
systemic issue, just part of JS's growing pains I suppose.

P.S.: That all said, I'm excited for the future of JS, I think it's got a 
lot of momentum behind it that'll push it in the right direction. Ever since
ECMA6, things seem to be getting much more promising (e.g. cool stuff like 
adopting FP principles). Also, thanks to node.js, there is an 
abundance of awesome libraries, projects and tools in the JS ecosystem.

## Q4 - Bonus answer:

I've been looking for a good and easy way of making cross-platform
desktop apps lately. I've heard about Electron in the past -- its virtue
is that it's an easy means of creating a cross-platform app, but its vice 
is, of course, that it's slow and bulky.
For the Electron framework, on the face of it, there seems to be a couple
easy(?), potential improvements for improving its issues. 
                                                                              
I think there could be just a single, system-wide chromium daemon that would 
run all the Electron apps on the system. As it stands, *every* Electron app on 
the system is bundled with it's own "chromium". This wastes disk space.
                                                                              
The daemon would run on boot. Each Electron app would be a "tab" of 
the daemon/"browser". This would speed up load times of apps and reduce the 
memory footprint. For security each app or "tab" process would be sandboxed 
to help make the system secure and so they don't interfere with each other.
