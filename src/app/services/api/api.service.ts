import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

	ORGANIZATION="http://41.74.172.131:8093/oltranz/services/organizations";
	WALLET="http://41.74.172.131:8088/oltranz/services/wallet";
	USER_MANAGEMENT="http://41.74.172.131:8084/oltranz/services/usermanagement";
	VOUCHERS="http://41.74.172.131:8089/oltranz/services/vouchers";
	PRODUCT="http://41.74.172.131:8110/oltranz/services/product";
	EQUIPMENT="http://41.74.172.131:8125/oltranz/services/equipment";
}
