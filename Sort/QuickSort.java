/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. Uses the middle element
 of the array.

  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com

------------------------------------------
    Psudocode:
      - QuickSort(array, front, end)
          if front < end
            then pivot = randomizedPartition(array, front end)
              QuickSort(array, front, pivot)
              QuickSort(array, pivot+1, end)

      - Partition(Array, front, end)
          x = Array[front]
          i = front - 1
          j = end + 1

          while TRUE
            do repeat (j--)
              until Array[j] <= x
            do repeat (i++)
              until Array[i] >= x
            if (i < j)
              then swap Array[i] with Array[j]
            else
              return j

        - randomizedPartition(Array,front, end)
            i = random(front, end)
            swap Array[front] with Array[i]
            return Parition(Array, front)

        - random(front, end)
          x = Math.random(between front and end)
          return x
  */

import java.util.Random;

public class sort {

	public static void main(String[] args) {
		int[] arr = new int[5000];

    //populate test array
		for(int i = 0; i < 5000; i++) {
			Random rand = new Random();
			int randomNum = rand.nextInt((10000 - 1) + 1) + 1;
			arr[i] = randomNum;
		}
    //print original test array
		for(int j = 0; j < arr.length; j++){
			System.out.print(arr[j] + " ");
		}

		int left = 0;
		int right = arr.length - 1;

    //sort array
		int[] result = quickSort(arr, left, right);

    //print sorted array
		System.out.println();
		for(int h = 0; h < result.length; h++){
			System.out.print(result[h] + " ");
		}

	}

	public static int[] quickSort(int[] arr, int left, int right) {
		int index = partition(arr, left, right);

		if(left < index - 1) {
			quickSort(arr, left, index - 1);
		}
		if(index < right) {
			quickSort(arr, index, right);
		}

		return arr;
	}
	public static int partition(int arr[], int left, int right) {
		int i = left, j = right;
		int pivot = arr[(left+right) / 2];

		while(i <= j) {
			while(arr[i] < pivot) {
				i++;
			}
			while(arr[j] > pivot) {
				j--;
			}

			if(i <= j) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				i++;
				j--;
			}
		}
		return i;
	}
}
