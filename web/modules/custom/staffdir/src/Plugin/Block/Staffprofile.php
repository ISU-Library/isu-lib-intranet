<?php

namespace Drupal\staffdir\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Block for staff profile
 *
 * @Block(
 *   id = "staff_profile_block",
 *   admin_label = @Translation("Staff Profile Block")
 * )
 */
class Staffprofile extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * @var \Drupal\cat_facts\CatFactsClient
   */
  protected $staffdirClient;

  /**
   * CatFacts constructor.
   *
   * @param array $configuration
   * @param $plugin_id
   * @param $plugin_definition
   * @param $cat_facts_client \Drupal\cat_facts\CatFactsClient
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, $staffdir_client) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->staffdirClient = $staffdir_client;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('staffdir.staffdir_client')
    );
  }

  /**
   * make sure block is never cached, since it includes a [different]
   *   dynamically-assigned netid each time it is called
   */
  public function getCacheMaxAge() {
	return 0;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

  /**
   * Returns a render-able array for a test page.
   * need to read in key/value pair for netid from query string
   *   that was used to call the page where this block resides, e.g.
   *   /node/54?netid=ambrown
   */
	$netid = \Drupal::request()->query->get('netid');

        $staffattributes = $this->staffdirClient->profile($netid);
        $items = [];

        foreach($staffattributes as $staffattribute) {
          $r_netid = $staffattribute['NETID'];
          $r_fullname = $staffattribute['FULLNAME'];
          $r_title = $staffattribute['TITLE'];
          $r_unitname_str = $staffattribute['UNITNAME_STR'];
          $r_unitname_alias = strtolower(str_replace(" ", "-", $r_unitname_str));
          $r_address = $staffattribute['ADDRESS'];
          $r_telephone = $staffattribute['TELEPHONE'];
          $r_uri = $staffattribute['URI'];
          $thisRow = array
          (
          "netid" => "$r_netid",
          "fullname" => "$r_fullname",
          "title" => "$r_title",
	  "unitname_str" => "$r_unitname_str",
	  "unitname_alias => "$r_unitname_alias",
          "address" => "$r_address",
          "telephone" => "$r_telephone",
          "uri" => "$r_uri"
          );
          $items[] = $thisRow;
        }

        return [
          '#theme' => 'staff_profile',
          '#staffattributes' => $items,
        ];

  }

}
