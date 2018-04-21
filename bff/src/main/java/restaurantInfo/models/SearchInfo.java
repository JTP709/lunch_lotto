package restaurantInfo.models;

import java.util.List;

public class SearchInfo {
    private List<RestaurantInfo> businesses;

    public SearchInfo(){

    }

    public List<RestaurantInfo> getBusinesses() {
        return businesses;
    }

    public void setBusinesses(List<RestaurantInfo> businesses) {
        this.businesses = businesses;
    }
}
