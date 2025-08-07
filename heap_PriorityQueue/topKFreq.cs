public class Solution
{
    public int[] TopKFrequent(int[] arr, int k)
    {
        //create dict/map
        Dictionary<int, int> map = new Dictionary<int, int>();
        foreach (int num in arr)
        {
            if (map.ContainsKey(num))
            {
                map[num]++;
            }
            else
            {
                map[num] = 1;
            }
        }

        // Min heap (least frequent at top)
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>();
        foreach (var item in map)
        {
            pq.Enqueue(item.Key, item.Value);
            if (pq.Count > k)
            {
                pq.Dequeue();
            }
        }

        // Build result array from priority queue
        int[] res = new int[k];
        for (int i = k - 1; i >= 0; i--)
        {
            res[i] = pq.Dequeue(); // just call Dequeue() to get the key
        }

        return res;

    }




}

public class MainClass
{
    static void Main(string[] args)
    {
        int[] nums = { 3, 3, 1, 6, 6, 4 };
        int k = 2;

        Solution solution = new Solution();
        solution.TopKFrequent(nums, k);

        //Console.WriteLine($"{k}th largest element is: {result}");
    }
}
