/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

let addTwoNumbers = function (l1 = [], l2 = []) {
  let l1Num = "";
  let l2Num = "";
  l1.reverse();
  l2.reverse();

  for (let i = 0; i < l1.length; i++) {
    l1Num += l1[i];
  }

  for (let i = 0; i < l2.length; i++) {
    l2Num += l2[i];
  }

  const sum = [parseInt(l1Num) + parseInt(l2Num)];
  return sum;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
