<?php
namespace Elementor; // Custom widgets must be defined in the Elementor namespace
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly (security measure)

/**
 * Widget Name: Cart
 */
class Theratio_Cart extends Widget_Base{

 	// The get_name() method is a simple one, you just need to return a widget name that will be used in the code.
	public function get_name() {
		return 'icart';
	}

	// The get_title() method, which again, is a very simple one, you need to return the widget title that will be displayed as the widget label.
	public function get_title() {
		return __( 'Theratio Cart Button', 'theratio' );
	}

	// The get_icon() method, is an optional but recommended method, it lets you set the widget icon. you can use any of the eicon or font-awesome icons, simply return the class name as a string.
	public function get_icon() {
		return 'eicon-cart';
	}

	// The get_categories method, lets you set the category of the widget, return the category name as a string.
	public function get_categories() {
		return [ 'category_theratio_header' ];
	}

	protected function _register_controls() {

		$this->start_controls_section(
			'style_icon_section',
			[
				'label' => __( 'Icon', 'theratio' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'icon_color',
			[
				'label' => __( 'Icon Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-cart i' => 'color: {{VALUE}};',
				]
			]
		);
		$this->add_responsive_control(
			'icon_size',
			[
				'label' => __( 'Icon Size', 'theratio' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .octf-cart i:before' => 'font-size: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'bg_count',
			[
				'label' => __( 'Background Count', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-cart .count' => 'background: {{VALUE}};',
				]
			]
		);
		$this->add_control(
			'count_color',
			[
				'label' => __( 'Count Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-cart .count' => 'color: {{VALUE}};',
				]
			]
		);

		$this->end_controls_section();
		
	}

	public static function theratio_render_menu_cart() {
		if ( null === WC()->cart ) {
			return;
		}
		$product_count = sprintf ( _n( '%d', '%d', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() );
		$cart_url = esc_url( wc_get_cart_url() );

		$widget_cart_is_hidden = apply_filters( 'woocommerce_widget_cart_is_hidden', false );
		?>
		<?php if ( ! $widget_cart_is_hidden ) : ?>
			<div class="octf-cart octf-cta-header">
				<a class="cart-contents" href="<?php echo $cart_url; ?>" title="<?php esc_attr_e( 'View your shopping cart', 'theratio' ); ?>"><i class="ot-flaticon-shopping-bag"></i> <span class="count"><?php echo $product_count; ?></span>
				</a>
				<?php if( !is_cart() && !is_checkout() ) { ?>
				<div class="site-header-cart">
					<?php the_widget( 'WC_Widget_Cart', array( 'title' => '' ) ); ?>
				</div>	
				<?php } ?>
			</div>
		<?php endif; ?>
		<?php
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		self::theratio_render_menu_cart();
	}

	protected function _content_template() {}
}
// After the Theratio_Cart class is defined, I must register the new widget class with Elementor:
Plugin::instance()->widgets_manager->register_widget_type( new Theratio_Cart() );