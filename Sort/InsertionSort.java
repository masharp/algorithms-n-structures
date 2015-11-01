/* This is an implementation of Insertion Sort function. This function assumes that the array is already sorted,
  except for the last element. The algorithm shifts elements larger than the unsorted value to the right one 
  index until an element less than or equal to the value is found. The value is then inserted there.

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
