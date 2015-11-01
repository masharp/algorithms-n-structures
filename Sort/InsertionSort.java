/* This is a standard Insertion Sort function for taking the last element of the array,
which is recently added, and sorting it into the sorted portion of the array.

    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com
*/

 public static void insertionSort(int[] numArray) {
         int unsortedValue = numArray[numArray.length - 1];

         for (int i = numArray.length - 2; i >= 0; i--) {
             if (numArray[i] >= unsortedValue) {
                 numArray[i+1] = numArray[i];

             }
             if (numArray[i] < unsortedValue) {
                 numArray[i+1] = unsortedValue;

                 break;
             }
             if (i == 0) {
                 numArray[i+1] = numArray[i];
                 numArray[i] = unsortedValue;
                 
             }
         }
    }
