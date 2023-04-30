1. The console will log 3 since that is the value of `i` after the loop finishes and it was defined by `var`
2. The console will log 150 since that is the last value of `discountedPrice` in the loop and it was defined with `var`
3. The console will log 150 since that was the last value that was set to `finalPrice` in the loop
4. This function will return `[50, 200, 150]` since in the function we loop through the original array and apply the discount which was 0.5 which means we half the price of the original aray and then push it back to the `discounted` array which results in the following return value
5. This will cause an error since `i` is defined in the scope of the for loop by let which means that it will not be reachable at line 12
6. This will cause an error since `discountedPrice` is defined in the scope of the for loop by let which means that it will not be reachable at line 13
7. The console will log 150 since that is the value that was placed in `finalPrice` at the end of the loop, and it is reachable in terms of scope 
8. This function will return `[50, 200, 150]` since in the function we loop through the original array and apply the discount which was 0.5 which means we half the price of the original aray and then push it back to the `discounted` array which results in the following return value
9. We will get an error since we are trying to log `i` which has been defined outside the scope with `let`.
10. The console will log 3 since the length of `prices` (i.e 3) was the value that was initially set to the variable `length`
11. The function will return `[50, 100, 150]` since we apply the discount to all the elements of `prices` and push it to `discounted`. No error is produced because we never reassign `discounted`, we only mutate it
12. Answers: 
	- A. `student.name`
	- B. `student['Grad Year']
	- C. `student.greeting()`
	- D. `student['Favorite Teacher'].name`
	- E. `student.courseLoad[0]`
13. Answers:
	- A. 32 since the int 2 turns into the string 2
	- B. 1 since the string 3 turns into the int 3
	- C. 3 since null become 0
	- D. 3null since null maps to the string null
	- E. 4 since true maps to 1
	- F. 0 since both false and null map to 0
	- G. 3undefined since undefined becomes a string
	- H. NaN since undefined becomes NaN
14. Answers:
	- A. true since '2' becomes the number 2
	- B. false by lexorder
	- C. true since 2 becomes the number 2
	- D. false since triple equals checks without type conversion
	- E. false since true = 1
	- F. true since Boolean(2) = true
15. `==` Checks equality with type conversion while `===` check equality wihout type conversion
16. See code
17. The result will be `[2,4,6]` because we loop through `array` and take each element and apply `doSomething()` to it and then push it into `newArr` which is what is returned. Thus calling `modifyArray([1,2,3], doSomething)` will return double each element which is `[2,4,6]`
18. See code
19. The output will be 1 4 3 2
