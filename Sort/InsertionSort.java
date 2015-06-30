/* This is a standard insertion sort function for taking the last
element of the array, which is recently added, and sorting it into the sorted portion of the array

    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com */

 public static void insertionSort(int[] numArray) {
         int temp = 0;
         int unsortedValue = numArray[numArray.length - 1];
         
         for (int i = numArray.length - 2; i >= 0; i--) {
             if (numArray[i] >= unsortedValue) {
                 numArray[i+1] = numArray[i];
                 for (int n : numArray) {
                     System.out.print(n + " ");
                 }
                 System.out.println();
             }
             if (numArray[i] < unsortedValue) {
                 numArray[i+1] = unsortedValue;
                 for (int n : numArray) {
                     System.out.print(n + " ");
                 }
                 break;
             }
             if (i == 0) {
                 numArray[i+1] = numArray[i];
                 numArray[i] = unsortedValue;
                 for (int n : numArray) {
                     System.out.print(n + " ");
                 }
             }
         }
    }
