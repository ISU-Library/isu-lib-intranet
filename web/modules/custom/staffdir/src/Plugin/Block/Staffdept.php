<?php

namespace Drupal\staffdir\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Block for staff department personnel
 *
 * @Block(
 *   id = "staff_dept_block",
 *   admin_label = @Translation("Staff Department Block")
 * )
 */
class Staffdept extends BlockBase implements ContainerFactoryPluginInterface {

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
   *   dynamically-assigned deptname each time it is called
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
   *   deptname, e.g.
   *     /divisions/research-and-instruction-services/research-services   
   *   and store path pieces in array; then use last path piece
   *   (i.e. $path_args[3]) to extract deptname; convert hyphen
   *   in path piece to "%20" space
   */
	$current_path = \Drupal::service('path.current')->getPath();
	$path = \Drupal::service('path_alias.manager')->getAliasByPath($current_path);
	$path_args = explode("/", $path);
	$deptname_orig = $path_args[3];
	$deptname = str_replace("-", " ", $deptname_orig);

        $deptpersons = $this->staffdirClient->dept($deptname);
        $items = [];

        foreach($deptpersons as $deptperson) {
          $r_netid = $deptperson['NETID'];
          $r_surname = $deptperson['SURNAME'];
          $r_firstname = $deptperson['FIRSTNAME'];
          $r_title = $deptperson['TITLE'];
          $r_uri = $deptperson['URI'];
          $thisRow = array
          (
          "netid" => "$r_netid",
          "surname" => "$r_surname",
          "firstname" => "$r_firstname",
          "title" => "$r_title",
          "uri" => "$r_uri"
          );
          $items[] = $thisRow;
        }

        return [
          '#theme' => 'staff_dept',
          '#deptpersons' => $items,
        ];

  }

}
