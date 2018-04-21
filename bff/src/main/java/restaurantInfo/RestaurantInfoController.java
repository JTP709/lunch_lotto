package restaurantInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import restaurantInfo.models.RestaurantInfo;
import restaurantInfo.models.SearchInfo;

@RestController
public class RestaurantInfoController {

    @Autowired
    private RestaurantService restaurantService;

    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping("/restaurant")
    public RestaurantInfo returnRestaurantInfoApiCall(@RequestParam(value="name") String name) {
        return restaurantService.getRestaurantInfo(name);
    }

    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping("/search")
    public SearchInfo returnSearchApiCall(@RequestParam(value="query") String query) {
        return restaurantService.getSearchInfo(query);
    }
}
