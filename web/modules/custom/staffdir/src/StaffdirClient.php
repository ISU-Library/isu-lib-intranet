<?php

namespace Drupal\staffdir;

use Drupal\Component\Serialization\Json;

class StaffdirClient {

  /**
   * @var \GuzzleHttp\Client
   */
  protected $client;

  /**
   * StaffdirClient constructor.
   *
   * @param $http_client_factory \Drupal\Core\Http\ClientFactory
   */
  public function __construct($http_client_factory) {
    $this->client = $http_client_factory->fromOptions([
      'base_uri' => 'https://app.lib.iastate.edu/staffdir/',
    ]);
  }

  /**
   * Get all staff
   *
   * @return array
   */
  public function allalpha() {
    $response = $this->client->get('allalpha', [
    ]);

    $data = Json::decode($response->getBody());

    return $data;
  }

  /**
   * Get individual staff profile
   *
   * @param string $netid
   *
   * @return array
   */
  public function profile($netid) {
	$response = $this->client->get('profile', [
	  'query' => [
		'netid' => $netid
	  ]
	]);
	$data = Json::decode($response->getBody());
	return $data;
  }

  /**
   * Get staff in a specific department
   *
   * @param string $deptname
   *
   * @return array
   */
  public function dept($deptname) {
	$response = $this->client->get('dept', [
	  'query' => [
		'deptname' => $deptname
	  ]
	]);
	$data = Json::decode($response->getBody());
	return $data;
  }


  /**
   * Get staff in a specific committee
   *
   * @param string $committeename
   *
   * @return array
   */
  public function committee($committeename) {
        $response = $this->client->get('committee', [
          'query' => [
                'committeename' => $committeename
          ]
        ]);
        $data = Json::decode($response->getBody());
        return $data;
  }

}
