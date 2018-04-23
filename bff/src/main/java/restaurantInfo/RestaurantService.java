package restaurantInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import restaurantInfo.models.RestaurantInfo;
import restaurantInfo.models.SearchInfo;

@Service
public class RestaurantService {

    private String yelpApiKey = "IYAQstOZ4h8aTpuMgpNyyW0TsWiqOcUgBWlNuUp9WEQ912twKu3cTa09PsSHqzF7boXz_5KqTtkioi10g3ijha8EC-nWxa0odXsRKuWsYWjeGgt1B50p_ewG2kfJWnYx";

    @Autowired
    public RestaurantService() {}

    public RestaurantInfo getRestaurantInfo(String name) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        //headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
        //headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization","Bearer "+yelpApiKey);

        HttpEntity<String> entity = new HttpEntity<String>(null , headers);

        ResponseEntity<RestaurantInfo> respEntity = restTemplate.exchange("https://api.yelp.com/v3/businesses/"+name, HttpMethod.GET, entity, RestaurantInfo.class);

        RestaurantInfo restaurantInfo = respEntity.getBody();
        return restaurantInfo;
    }

    public SearchInfo getSearchInfo(String query) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        //headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
        //headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization","Bearer IYAQstOZ4h8aTpuMgpNyyW0TsWiqOcUgBWlNuUp9WEQ912twKu3cTa09PsSHqzF7boXz_5KqTtkioi10g3ijha8EC-nWxa0odXsRKuWsYWjeGgt1B50p_ewG2kfJWnYx");

        HttpEntity<String> entity = new HttpEntity<String>(null , headers);

        ResponseEntity<SearchInfo> respEntity = restTemplate.exchange("https://api.yelp.com/v3/businesses/search?term="+query+"&latitude=39.104330&longitude=-84.511893", HttpMethod.GET, entity, SearchInfo.class);

        SearchInfo searchInfo = respEntity.getBody();
        return searchInfo;
    }

}
