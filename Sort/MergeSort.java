/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself until sorted and then merges
  the two halves into a single sorted array;

  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com

  ----------------------------
  Psudocode:
    -   mergeSort
      if p < r
        then q = floor(p + r / 2)
          mergeSort(A, p, q)
          mergeSort(A, q+1, r)
          merge(A[p..q], A[q+1..r])

    - merge
         while left.length > 0 && right.length > 0
            if left < right
              result.push(left)
              left++
            else
              result.push(right)
              right++
          if left.length > 0
            result.push(left)
          if right.length > 0
            result.push(right)
          return result
  */

import java.util.Arrays;
import java.util.Random;

public class sort {

  //main function. includes test array population and initial call
	public static void main(String[] args) {
		int[] arr = new int[5000];

		for(int i = 0; i < 5000; i++) {
			Random rand = new Random();
			int randomNum = rand.nextInt((1000 - 1) + 1) + 1;
			arr[i] = randomNum;
		}
		for(int j = 0; j < arr.length; j++){
			System.out.print(arr[j] + " ");
		}


		int[] result = mergeSort(arr);

		System.out.println();

		for(int h = 0; h < result.length; h++){
			System.out.print(result[h] + " ");
		}

	}

  //mergeSort function that divides the unsorted array and then returns a single sorted array
	public static int[] mergeSort(int[] arr) {
		if(arr.length == 1) {
			return arr;
		}
		int middle = arr.length / 2;
		int[] left = Arrays.copyOfRange(arr, 0, middle);
		int[] right = Arrays.copyOfRange(arr, middle, arr.length);

		return merge(mergeSort(left), mergeSort(right));
	}

  //merge function that sorts the two subarrays and then returns a combined sorted array
	public static int[] merge(int[] left, int[] right) {
		int[] result = new int[left.length + right.length];

		int k = 0;
		int i = 0;
		int j = 0;

		while(i < left.length && j < right.length) {
			if(left[i] < right[j]) {
				result[k] = left[i];
				i++;
			} else {
				result[k] = right[j];
				j++;
			}
			k++;
		}
		while(i < left.length) {
			result[k] = left[i];
			k++;
			i++;
		}
		while(j < right.length) {
			result[k] = right[j];
			k++;
			j++;
		}
		return result;
	}
}
