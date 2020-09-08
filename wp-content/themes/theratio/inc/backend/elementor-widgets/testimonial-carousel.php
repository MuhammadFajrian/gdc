<?php
namespace Elementor; // Custom widgets must be defined in the Elementor namespace
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly (security measure)

/**
 * Widget Name: Testimonial Slider
 */
class Theratio_Testimonials extends Widget_Base{

 	// The get_name() method is a simple one, you just need to return a widget name that will be used in the code.
	public function get_name() {
		return 'itestimonials';
	}

	// The get_title() method, which again, is a very simple one, you need to return the widget title that will be displayed as the widget label.
	public function get_title() {
		return __( 'Theratio Testimonial Slider', 'theratio' );
	}

	// The get_icon() method, is an optional but recommended method, it lets you set the widget icon. you can use any of the eicon or font-awesome icons, simply return the class name as a string.
	public function get_icon() {
		return 'eicon-testimonial-carousel';
	}

	// The get_categories method, lets you set the category of the widget, return the category name as a string.
	public function get_categories() {
		return [ 'category_theratio' ];
	}

	protected function _register_controls() {

		$this->start_controls_section(
			'section_testimonials',
			[
				'label' => __( 'Testimonials', 'theratio' ),
			]
		);
		$repeater = new Repeater();
		$repeater->add_control(
			'tcontent',
			[
				'label' => __( 'Content', 'theratio' ),
				'type' => Controls_Manager::TEXTAREA,
				'rows' => '10',
				'default' => '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."',
			]
		);

		$repeater->add_control(
			'timage',
			[
				'label' => __( 'Avatar', 'theratio' ),
				'type' => Controls_Manager::MEDIA,
				'default' => [
					'url' => Utils::get_placeholder_image_src(),
				],
			]
		);

		$repeater->add_control(
			'title',
			[
				'label' => __( 'Name', 'theratio' ),
				'type' => Controls_Manager::TEXT,
				'default' => 'Anna Paulina',
			]
		);

		$repeater->add_control(
			'tjob',
			[
				'label' => __( 'Job', 'theratio' ),
				'type' => Controls_Manager::TEXT,
				'default' => 'Client of Company',
			]
		);

		$this->add_control(
		    'testi_slider',
		    [
		        'label'       => '',
		        'type'        => Controls_Manager::REPEATER,
		        'show_label'  => false,
		        'default'     => [
		            [
		             	'tcontent' => __( '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."', 'theratio' ),
		                'timage'  => [
							'url' => Utils::get_placeholder_image_src(),
						],
						'tname'	  => 'Anna Paulina',
						'tjob'	  => 'Client of Company'
		            ],
		            [
		             	'tcontent' => __( '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."', 'theratio' ),
		                'timage'  => [
							'url' => Utils::get_placeholder_image_src(),
						],
						'tname'	  => 'Anna Paulina',
						'tjob'	  => 'Client of Company'
		            ],
		            [
		             	'tcontent' => __( '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."', 'theratio' ),
		                'timage'  => [
							'url' => Utils::get_placeholder_image_src(),
						],
						'tname'	  => 'Anna Paulina',
						'tjob'	  => 'Client of Company'
		            ]
		        ],
		        'fields'      => array_values( $repeater->get_controls() ),
		        'title_field' => '{{{title}}}',
		    ]
		);

		$this->add_control(
			'version_style',
			[
				'label' => __( 'Style', 'theratio' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'v-light',
				'options' => [
					'v-light' => __( 'Light', 'theratio' ),
					'v-dark' => __( 'Dark', 'theratio' ),
				]
			]
		);

		$slides_show = range( 1, 10 );
		$slides_show = array_combine( $slides_show, $slides_show );
		
		$this->add_responsive_control(
			'tshow',
			[
				'label' => __( 'Slides to Show', 'theratio' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => __( 'Default', 'theratio' ),
				] + $slides_show,
			]
		);
		$this->add_responsive_control(
			'tscroll',
			[
				'label' => __( 'Slides to Scroll', 'theratio' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => __( 'Default', 'theratio' ),
				] + $slides_show,
			]
		);
		$this->add_control(
			'navigation',
			[
				'label' => __( 'Navigation', 'theratio' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'dots',
				'options' => [
					'both' => __( 'Arrows and Dots', 'theratio' ),
					'arrows' => __( 'Arrows', 'theratio' ),
					'dots' => __( 'Dots', 'theratio' ),
					'none' => __( 'None', 'theratio' ),
				],
			]
		);

		$this->end_controls_section();

		// Styling.
		$this->start_controls_section(
			'style_tcontent',
			[
				'label' => __( 'General', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'heading_cbox',
			[
				'label' => __( 'Content Box', 'theratio' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'tcontent_bg',
			[
				'label' => __( 'Background Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials .testi-item .ttext, {{WRAPPER}} .ot-testimonials .testi-item .ttext > span' => 'background: {{VALUE}};',
					'{{WRAPPER}} .ot-testimonials .testi-item .ttext' => 'border-color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'tlayer_bg',
			[
				'label' => __( 'Background Color Behind', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials .ttext .layer-behind' => 'background: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'tcontent_color',
			[
				'label' => __( 'Text Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials .ttext' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'content_typography',
				'selector' => '{{WRAPPER}} .ot-testimonials .ttext',
			]
		);

		$this->add_control(
			'tcontent_padding',
			[
				'label' => __( 'Padding', 'theratio' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials .ttext' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Image.
		$this->start_controls_section(
			'style_timage',
			[
				'label' => __( 'Avatars', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'spacing_img',
			[
				'label' => __( 'Spacing', 'theratio' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials img' => 'margin-right: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'image_size',
			[
				'label' => __( 'Max-Width', 'theratio' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 20,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials img' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'image_border_radius',
			[
				'label' => __( 'Border Radius', 'theratio' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Name.
		$this->start_controls_section(
			'style_tname',
			[
				'label' => __( 'Name', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'name_color',
			[
				'label' => __( 'Text Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials h6' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'name_typography',
				'selector' => '{{WRAPPER}} .ot-testimonials h6',
			]
		);

		$this->add_control(
			'spacing_name',
			[
				'label' => __( 'Spacing', 'theratio' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials h6' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Job.
		$this->start_controls_section(
			'style_tjob',
			[
				'label' => __( 'Job', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'job_color',
			[
				'label' => __( 'Text Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .ot-testimonials span' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'job_typography',
				'selector' => '{{WRAPPER}} .ot-testimonials span',
			]
		);		

		$this->end_controls_section();

		// Dots.
		$this->start_controls_section(
			'style_dots',
			[
				'label' => __( 'Dots', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'navigation' => [ 'dots', 'both' ],
				],
			]
		);

		$this->add_control(
			'dots_bgcolor',
			[
				'label' => __( 'Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-pagination .swiper-pagination-bullet-active' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .octf-swiper-pagination .swiper-pagination-bullet:before' => 'background: {{VALUE}};',
				]
			]
		);
		$this->add_control(
			'dots_active_bgcolor',
			[
				'label' => __( 'Color Active', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-pagination .swiper-pagination-bullet-active' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .octf-swiper-pagination .swiper-pagination-bullet-active:before' => 'background: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		// Arrow.
		$this->start_controls_section(
			'style_nav',
			[
				'label' => __( 'Arrow', 'theratio' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'navigation' => [ 'arrows', 'both' ],
				]
			]
		);
		$this->add_control(
			'arrow_bg_color',
			[
				'label' => __( 'Background', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-button-next, {{WRAPPER}} .octf-swiper-button-prev' => 'background: {{VALUE}};',
				]
			]
		);
		$this->add_control(
			'arrow_color',
			[
				'label' => __( 'Color', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-button-next, {{WRAPPER}} .octf-swiper-button-prev' => 'color: {{VALUE}};',
				]
			]
		);
		$this->add_control(
			'arrow_bg_hcolor',
			[
				'label' => __( 'Background Hover', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-button-next:not(.swiper-button-disabled):hover, {{WRAPPER}} .octf-swiper-button-prev:not(.swiper-button-disabled):hover' => 'background: {{VALUE}};',
				]
			]
		);
		$this->add_control(
			'arrow_hcolor',
			[
				'label' => __( 'Color Hover ', 'theratio' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .octf-swiper-button-next:not(.swiper-button-disabled):hover, {{WRAPPER}} .octf-swiper-button-prev:not(.swiper-button-disabled):hover' => 'color: {{VALUE}};',
				]
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$dots = ( in_array( $settings['navigation'], [ 'dots', 'both' ] ) );
		$arrows = ( in_array( $settings['navigation'], [ 'arrows', 'both' ] ) );
		?>

		<div class="ot-testimonials <?php echo $settings['version_style']; ?>">						
			<div class="testimonial-inner ot-testimonials-slider-s1 swiper-container" <?php if( is_rtl() ){ echo'dir="rtl"'; }?> data-show="<?php echo $settings['tshow']; ?>" data-show-tablet="<?php echo esc_attr( $settings['tshow_tablet'] ); ?>" data-show-mobile="<?php echo esc_attr( $settings['tshow_mobile'] ); ?>" data-scroll="<?php echo $settings['tscroll']; ?>" data-scroll-tablet="<?php echo $settings['tscroll_tablet']; ?>" data-scroll-mobile="<?php echo $settings['tscroll_mobile']; ?>">
				<div class="swiper-wrapper">
				<?php 
				if ( ! empty( $settings['testi_slider'] ) ) : foreach ( $settings['testi_slider'] as $testi ) : 
					if( $testi['timage']['id'] ){
						$image_html = wp_get_attachment_image( $testi['timage']['id'], 'thumbnail' ); // Get Value widget Image Size Control by name widget:  $settings['timage_size_size']
					}else{
						$image_html = '<img src="' . esc_attr( $testi['timage']['url'] ) . '" alt="' . esc_attr( $testi['tname'] ) . '">';
					}
				?>
					<div class="swiper-slide">
						<div class="testi-item">
					        <div class="ttext">
					        	<div class="layer-behind"></div>
					        	<span></span>
					        	<?php echo $testi['tcontent']; ?>
					        </div>
					        <div class="t-head flex-middle">
								<?php if( $testi['timage']['url'] ) { echo $image_html; } ?>
					        	<div class="tinfo">
					        		<h6><?php echo $testi['title']; ?></h6>
					        		<?php if($testi['tjob']) { ?><span><?php echo $testi['tjob']; ?></span><?php } ?>
					        	</div>
				        	</div>
			        	</div>
					</div>
				<?php endforeach; endif; ?>
				</div>

				<?php if( $arrows  ){ ?>
				<!-- Add Arrows -->
				<div class="octf-swiper-button-next"><i class="ot-flaticon-right-arrow"></i></div>
				<div class="octf-swiper-button-prev"><i class="ot-flaticon-left-arrow"></i></div>
				<?php } ?>
				<?php if( $dots ){ ?>
				<!-- Add Dots -->
				<div class="octf-swiper-pagination"></div>
				<?php } ?>
			</div>				
	    </div>

	    <?php
	}

	protected function _content_template() {}
}
// After the Theratio_Testimonials class is defined, I must register the new widget class with Elementor:
Plugin::instance()->widgets_manager->register_widget_type( new Theratio_Testimonials() );