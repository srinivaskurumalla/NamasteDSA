public class Solution
{
    public  int FindKthLargest(int[] nums, int k)
    {
        var minHeap = new PriorityQueue<int, int>();
        foreach (int num in nums)
        {
            minHeap.Enqueue(num, num);
            if (minHeap.Count > k)
            {
                minHeap.Dequeue();
            }
        }

        return minHeap.Peek();
    }


}

public class MainClass
{
    static void Main(string[] args)
    {
         int[] nums = { 3, 2, 1, 5, 6, 4 };
        int k = 2;

        Solution solution = new Solution();
        int result = solution.FindKthLargest(nums, k);

        Console.WriteLine($"{k}th largest element is: {result}");
    }
}
