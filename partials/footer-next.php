<?php
  /*
   * Next up footer. 
   * If there is a feature image it will display it else 
   * renders an imageless view.
   */

  $next_post = get_next_post();
  $next_css = 'next';
?>

<?php
  if ( !empty($next_post) ): 
    $post_thumbnail_id = get_post_thumbnail_id( $next_post->ID );
    if (strlen( $post_thumbnail_id) > 0 ):
      $next_css = 'next next-feature';
      $img_url = wp_get_attachment_image_src( $post_thumbnail_id, 'original' );
    endif;
  endif; 
?>

<div class="up">
  <a id="back-up" href="javascript:void(0)"><i></i>back to top</a>
</div>

<footer class="footer <?php echo $next_css; ?>">

  <?php if ( strlen( $post_thumbnail_id) > 0 ): ?>
    <div class="next-bg" style="background-image: url(<?php echo $img_url[0] ?>);"></div>
    <div class="blanket"></div>
  <?php endif; ?>

  <?php if ( !empty($next_post) ): ?>
    <a class="footer-navigate" href="<?php echo get_permalink( $next_post->ID ); ?>">
      <div class="f-grid f-row">
        <div class="content">
          <h3 class="h-3">Next up...</h3>
          <h1 class="h-1"><?php echo $next_post->post_title; ?></h1>
          <h4 class="h-4"><?php echo get_the_subtitle( $next_post->ID ); ?></h4>
        </div>
      </div>
    </a>
  <?php endif; ?>

  <?php get_template_part('partials/footer', 'legals'); ?>
</footer>