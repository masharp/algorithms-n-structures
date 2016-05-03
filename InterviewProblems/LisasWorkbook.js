/**
 * HackerRank Algorithm Problem Lisa's Workbook
 * https://www.hackerrank.com/challenges/bear-and-workbook
 *
 * STORY:
 *    Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters.
 *      - There are n chapters in Lisa's workbook, numbered from 1 to n.
 *      - The i-th chapter has Ti problems, numbered from 1 to Ti.
 *      - Each page can hold up to k problems.
 *          There are no empty pages or unnecessary spaces, so only the last page of a
 *          chapter may contain fewer than k problems.
 *      - Each new chapter starts on a new page, so a page will never contain problems
 *          from more than one chapter.
 *      - The page number indexing starts at 1.
 *
 *    Lisa believes a problem to be special if its index (within a chapter) is the same as
 *    the page number where it's located. Given the details for Lisa's workbook, can you
 *    count its number of special problems?
 *
 * michael@softwareontheshore.com
 */
'use strict';

const test = '5 3\n4 2 6 1 10';

function findSpecial(input) {
  /* wonky input parsing from HackerRank's web IDE */
  const splitInput = input.split('\n');
  const pageMax = splitInput[0].split(' ')[1];
  const chapterProblems = splitInput[1].split(' ').map(Number);
  const workbook = [];
  let pages = 0;
  let specials = 0;

  chapterProblems.forEach((i) => {
    let page = [];

    for (let j = 1; j < i + 1; j++) {
      page.push(j)

      if (j % pageMax === 0) {
        workbook.push(page);
        pages++;
        page = [];
        if (workbook[pages - 1].indexOf(pages) >= 0) specials++;
      } else if (j === i) {
        workbook.push(page);
        pages++;
        if (workbook[pages - 1].indexOf(pages) >= 0) specials++;
      }
    }
  });
  console.log(specials);
}

findSpecial(test)
