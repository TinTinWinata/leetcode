public class Solution {
    public bool IsIsomorphicNoOrder(string s, string t){
        Dictionary<char, char> map = new Dictionary<char, char>();
        for(int i = 0;i < s.Length;i++){
            char sValue = s[i];
            char tValue = t[i];

            if(map.ContainsKey(sValue)){
                if(map[sValue] != tValue){
                    return false;
                }
                continue;
            } else {
                map.Add(sValue, tValue);
            }
        }
        return true;
    }
    public bool IsIsomorphic(string s, string t) {
        return IsIsomorphicNoOrder(s, t) && IsIsomorphicNoOrder(t, s);
    }
}