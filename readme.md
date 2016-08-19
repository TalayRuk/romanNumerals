## BDD SPECS

Markdown | Example Input | Example Output
--- | :---: |:---:
-Allow input for positive numbers only.| a, A, 3 |n/a; n/a; III
- Number into I | 1 | I
-Numbers should be changed to multiple letters.|3|III
-5 returns V | 5 | V
-There should not be more than three of the same characters in a row. Instead, switch to subtraction method.|4| IV (not IIII)
-10 returns X | 10 | X
-9 returns IX | 9 | IX
-50 returns L | 50|L
-49 returns XLIX |49|XLIX
-100 returns C |100|C
-99 returns XCIX|99|XCIX
-500 returns D|500|D
-499 returns CDIX|499|CDIX
-All numbers on Return Table Test list give correct return| 3,999|MMMCMXCIX



-Do not allow a number higher than 3,999 to be entered with explanation. |4,000|"Cannot enter number over 3,999"
-Subtraction rules separate ones, tens, hundreds, and thousands.|99|XCIX (not IC)


### Correct Return Table Test;
Markdown | Example Input |
 :---: |:---:
 1|I
 4|IV
 5|V
 6|VI
 9|IX
 10|X
 30|XXX
 40|XL
 41|XLI
 44|XLIV
 49|XLIX
 99|XCIX
 101|CI
 149|CXLIX
 500|D
 999|CMXCIX
 1,000|M
 3,999|MMMCMXCIX
