<?php
namespace Drupal\staffdir\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\staffdir\StaffdirClient;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;


/**
 * An example controller.
 */
class StaffdirController extends ControllerBase {

  private $staffdirClient;

  public function __construct(StaffdirClient $my_service) {
	$this->staffdirClient = $my_service;
  }

  public static function create(ContainerInterface $container) {
	$my_service = $container->get('staffdir.staffdir_client');
	return new static ($my_service);
  }


  /**
   * Returns a render-able array for a test page.
   */
  public function content() {
	$staffpersons = $this->staffdirClient->allalpha();
	$items = [];

	foreach($staffpersons as $staffperson) {
	  $r_netid = $staffperson['NETID'];
	  $r_surname = $staffperson['SURNAME'];
	  $r_firstname = $staffperson['FIRSTNAME'];
	  $r_title = $staffperson['TITLE'];
	  $r_unitname = $staffperson['UNITNAME'];
	  $thisRow = array
	  (
	  "netid" => "$r_netid",
	  "surname" => "$r_surname",
	  "firstname" => "$r_firstname",
	  "title" => "$r_title",
	  "unitname" => "$r_unitname"
	  );
	  $items[] = $thisRow;
	}

	return [
	  '#theme' => 'staff_list',
	  '#staffpersons' => $items,
	];

  }


}

