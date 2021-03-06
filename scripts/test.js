// ./test.js
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {  
    duration: '5s',  
    vus: 2,  
    thresholds: {    
        http_req_duration: ['p(95)<500'],  
    },
};

export default function () {  
    const res = http.get('https://test.k6.io');  
    sleep(1);
}
