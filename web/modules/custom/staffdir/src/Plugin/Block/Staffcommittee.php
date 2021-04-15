<?php

namespace Drupal\staffdir\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Block for staff committee personnel
 *
 * @Block(
 *   id = "staff_committee_block",
 *   admin_label = @Translation("Staff Committee Block")
 * )
 */
class Staffcommittee extends BlockBase implements ContainerFactoryPluginInterface {

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
   *   dynamically-assigned committeename each time it is called
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
   * need to read in uri/path of existing page [alias version] for
   *   committeename, e.g. /about/committees/events, and store path pieces
   *   in array; then use last path piece (i.e. $path_args[3]) to
   *   extract committeename; convert hyphen in path piece to "%20" space
   */
	$current_path = \Drupal::service('path.current')->getPath();
	$path = \Drupal::service('path_alias.manager')->getAliasByPath($current_path);
	$path_args = explode("/", $path);
	$committeename_orig = $path_args[3];
	$committeename = str_replace("-", " ", $committeename_orig);

        $committeepersons = $this->staffdirClient->committee($committeename);
        $items = [];

        foreach($committeepersons as $committeeperson) {
          $r_netid = $committeeperson['NETID'];
          $r_surname = $committeeperson['SURNAME'];
          $r_firstname = $committeeperson['FIRSTNAME'];
          $r_jobdescr = $committeeperson['JOBDESCR'];
          $r_uri = $committeeperson['URI'];
          $r_role = $committeeperson['ROLE'];
          $thisRow = array
          (
          "netid" => "$r_netid",
          "surname" => "$r_surname",
          "firstname" => "$r_firstname",
          "jobdescr" => "$r_jobdescr",
          "uri" => "$r_uri",
          "role" => "$r_role"
          );
          $items[] = $thisRow;
        }

        return [
          '#theme' => 'staff_committee',
          '#committeepersons' => $items,
        ];

  }

}
