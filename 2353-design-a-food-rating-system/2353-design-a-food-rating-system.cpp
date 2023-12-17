class Food {
public:
    int rating;
    string name;

    Food(int r, string n) : rating(r), name(n) {}

    bool operator<(const Food& other) const {
        return (rating == other.rating) ? (name > other.name) : (rating < other.rating);
    }
};

class FoodRatings {
    unordered_map<string, int> ratingsMap;
    unordered_map<string, string> cuisineMap;
    unordered_map<string, priority_queue<Food>> cuisineFoodMap;

public:
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        for (size_t i = 0; i < foods.size(); ++i) {
            ratingsMap[foods[i]] = ratings[i];
            cuisineMap[foods[i]] = cuisines[i];
            cuisineFoodMap[cuisines[i]].push(Food(ratings[i], foods[i]));
        }
    } 
    
    void changeRating(string food, int newRating) {
        ratingsMap[food] = newRating;
        auto cuisineName = cuisineMap[food];
        cuisineFoodMap[cuisineName].push(Food(newRating, food));
    }
    
    string highestRated(string cuisine) {
        auto highestRated = cuisineFoodMap[cuisine].top();
        
        while (ratingsMap[highestRated.name] != highestRated.rating) {
            cuisineFoodMap[cuisine].pop();
            highestRated = cuisineFoodMap[cuisine].top();
        }
        return highestRated.name;
    }
};
